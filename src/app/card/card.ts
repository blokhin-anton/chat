class Card {
    
    private name: string;
    private value: number;
    private description: string;

    constructor(name: string, value: number, description: string) {
        this.name = name;
        this.value = value;
        this.description = description;
    }

    getName(): string {
        return this.name
    }
    getValue(): number {
        return this.value;
    }
    getDescription(): string {
        return this.description;
    }
    
}

export default Card;