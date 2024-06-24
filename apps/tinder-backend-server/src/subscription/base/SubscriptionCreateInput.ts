/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { IsDate, IsOptional, IsEnum, ValidateNested } from "class-validator";
import { Type } from "class-transformer";
import { EnumSubscriptionSubscriptionType } from "./EnumSubscriptionSubscriptionType";
import { UserWhereUniqueInput } from "../../user/base/UserWhereUniqueInput";

@InputType()
class SubscriptionCreateInput {
  @ApiProperty({
    required: false,
  })
  @IsDate()
  @Type(() => Date)
  @IsOptional()
  @Field(() => Date, {
    nullable: true,
  })
  expiryDate?: Date | null;

  @ApiProperty({
    required: false,
    enum: EnumSubscriptionSubscriptionType,
  })
  @IsEnum(EnumSubscriptionSubscriptionType)
  @IsOptional()
  @Field(() => EnumSubscriptionSubscriptionType, {
    nullable: true,
  })
  subscriptionType?: "Option1" | null;

  @ApiProperty({
    required: false,
    type: () => UserWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => UserWhereUniqueInput)
  @IsOptional()
  @Field(() => UserWhereUniqueInput, {
    nullable: true,
  })
  user?: UserWhereUniqueInput | null;
}

export { SubscriptionCreateInput as SubscriptionCreateInput };