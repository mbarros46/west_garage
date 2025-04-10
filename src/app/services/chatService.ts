import { Client } from '@stomp/stompjs';
import SockJS from 'sockjs-client';

class ChatService {
    private client: Client | null = null;
    private messageCallbacks: ((message: string) => void)[] = [];

    connect(username: string, onMessage: (message: string) => void) {
        this.messageCallbacks.push(onMessage);

        if (this.client) {
            return;
        }

        this.client = new Client({
            webSocketFactory: () => new SockJS('http://localhost:8080/ws'),
            connectHeaders: {
                username: username
            },
            debug: function (str) {
                console.log(str);
            },
            reconnectDelay: 5000,
            heartbeatIncoming: 4000,
            heartbeatOutgoing: 4000
        });

        this.client.onConnect = () => {
            console.log('Connected to WebSocket');
            this.client?.subscribe('/topic/public', (message) => {
                const receivedMessage = JSON.parse(message.body);
                this.messageCallbacks.forEach(callback => callback(receivedMessage.content));
            });
        };

        this.client.onStompError = (frame) => {
            console.error('Broker reported error: ' + frame.headers['message']);
            console.error('Additional details: ' + frame.body);
        };

        this.client.activate();
    }

    disconnect() {
        if (this.client) {
            this.client.deactivate();
            this.client = null;
        }
        this.messageCallbacks = [];
    }

    sendMessage(message: string) {
        if (this.client && this.client.connected) {
            this.client.publish({
                destination: '/app/chat.send',
                body: JSON.stringify({ content: message })
            });
        }
    }

    async getMessageHistory(): Promise<string[]> {
        try {
            const response = await fetch('http://localhost:8080/api/chat/messages');
            if (!response.ok) {
                throw new Error('Failed to fetch message history');
            }
            return await response.json();
        } catch (error) {
            console.error('Error fetching message history:', error);
            return [];
        }
    }

    async clearMessageHistory(): Promise<void> {
        try {
            const response = await fetch('http://localhost:8080/api/chat/messages', {
                method: 'DELETE'
            });
            if (!response.ok) {
                throw new Error('Failed to clear message history');
            }
        } catch (error) {
            console.error('Error clearing message history:', error);
        }
    }
}

export const chatService = new ChatService(); 