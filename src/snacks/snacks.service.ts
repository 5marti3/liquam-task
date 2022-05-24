import { Injectable } from '@nestjs/common';
import { Snack } from './snack.interface';

@Injectable()
export class SnacksService {
	private snacks: Snack[] = [];
	private idCounter: number = 0;
	private MAX_PRICE = 99;

	getAllSnacks(min: number = 0, max: number = this.MAX_PRICE) {
		return this.snacks.filter((snack) => snack.price <= max && snack.price >= min);
	}

	getSnack(id: number) {
		return this.snacks.find((snack) => snack.id === id);
	}

	createSnack(name: string) {
		let newSnack: Snack = {
			id: this.idCounter,
			name: name,
			price: Math.floor(Math.random() * this.MAX_PRICE) + 0.99
		};
		this.snacks.push(newSnack);
		this.idCounter++;
	}

	deleteSnack(id: number) {
		this.snacks = this.snacks.filter((snack) => snack.id !== id);
	}
}
