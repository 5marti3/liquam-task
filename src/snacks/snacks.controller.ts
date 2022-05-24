import { Controller, Get, Post, Delete, Param, Query } from '@nestjs/common';
import { SnacksService } from './snacks.service';
import { Snack } from './snack.interface';

@Controller('snacks')
export class SnacksController {
	constructor(private snacksService: SnacksService) {}
	@Post('/')
	createSnack(@Query('name') name: string): string {
		this.snacksService.createSnack(name);
		return 'Snack added!';
	}

	@Get('/')
	getSnacks(@Query('min') min: number, @Query('max') max: number): Snack[] {
		return this.snacksService.getAllSnacks(min, max);
	}

	@Get('/:id')
	getSnack(@Param('id') id: number): Snack {
		return this.snacksService.getSnack(id);
	}

	@Delete('/:id')
	deleteSnacks(@Param('id') id: number): string {
		this.snacksService.deleteSnack(id);
		return 'Snack deleted!';
	}
}
