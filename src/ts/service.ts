export function sayHello() {
    return 'Hello TS';
}

export async function sayAsyncHello() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve('Hello async TS');
        }, 20);
    });
}

interface Book {
    title: string;
    price: number;
    isbn: string;
}

export function getBooks(): Book[] {
    return [
        {
            title: 'Harry potter',
            isbn: 'foo',
            price: 200.65
        }
    ];
}