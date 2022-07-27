import { Controller, Get, Param, QueryParam } from 'routing-controllers';
import { Service } from 'typedi';
import { CharacterService } from './character.service';

@Service()
@Controller('/characters')
export class CharacterController {
  constructor(private characterService: CharacterService) {}

  @Get()
  findAll(@QueryParam('page') page: number = 1) {
    return this.characterService.findAll(page);
  }

  @Get('/:id')
  findById(@Param('id') id: number) {
    return this.characterService.findById(id);
  }
}
