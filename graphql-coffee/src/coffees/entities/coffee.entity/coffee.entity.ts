import { Field, ID, ObjectType } from '@nestjs/graphql';

@ObjectType({ description: 'Coffee model' })
export class Coffee {
  @Field(() => ID, { description: 'Coffee entity ID' })
  id: number;
  name: string;
  brand: string;
  flavors: string[];
}
