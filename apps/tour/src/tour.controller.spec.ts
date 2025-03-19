import { Test, TestingModule } from '@nestjs/testing';
import { TourController } from './tour.controller';
import { TourService } from './tour.service';

describe('TourController', () => {
  let tourController: TourController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [TourController],
      providers: [TourService],
    }).compile();

    tourController = app.get<TourController>(TourController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(tourController.getHello()).toBe('Hello World!');
    });
  });
});
