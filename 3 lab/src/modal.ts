export class Modal {
    open(message: string): void {
        console.log('Modal opened with message:', message);
    }

    close(): void {
        console.log('Modal closed');
    }
}