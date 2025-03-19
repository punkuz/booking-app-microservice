import { Controller, Get } from '@nestjs/common';
import { TourService } from './tour.service';

@Controller("tour")
export class TourController {
  constructor(private readonly tourService: TourService) {}

  @Get()
  getHello(): string {
    return this.tourService.getHello();
  }
}
