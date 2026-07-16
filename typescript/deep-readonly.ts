type DeepReadonly<T> = {
    readonly [P in keyof T]: DeepReadonly<T[P]>;
};

interface User {
    name: string;
    age: number;
    address: {
        city: string;
        country: string;
    };
}

const user: DeepReadonly<User> = {
    name: "John",
    age: 30,
    address: {
        city: "New York",
        country: "USA"
    }
};

// user.address.city = "Los Angeles"; // Error: Cannot assign to 'city' because it is a read-only property.

