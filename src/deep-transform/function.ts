import type { NameIgnorePredicate, Obj } from ".";
import type { CaseStrategyName } from "../strategy";

import { deepTransformFactory } from "./factory";

export function deepTransform<O = unknown>(
    from: CaseStrategyName,
    to: CaseStrategyName,
    obj: Obj,
    nameIgnorePredicate?: NameIgnorePredicate,
) {
    return deepTransformFactory(from, to, nameIgnorePredicate)<O>(obj);
}
