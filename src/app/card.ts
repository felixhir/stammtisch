import { Color } from "./card/color.enum";
import { Value } from "./card/value.enum";

export interface Card {
    color: Color;
    value: Value;
}
