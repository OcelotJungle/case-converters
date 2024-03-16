import type { NameIgnorePredicate, Obj } from ".";
import type { CaseStrategyName } from "..";

import { CaseStrategyFactory, CaseTransformer } from "..";

export function deepTransformFactory(
    from: CaseStrategyName,
    to: CaseStrategyName,
    nameIgnorePredicate?: NameIgnorePredicate,
) {
    const transformer = new CaseTransformer(
        CaseStrategyFactory.create(from),
        CaseStrategyFactory.create(to),
    );

    function transform<O = unknown>(obj: Obj) {
        function _transform(obj: unknown): unknown {
            if (obj == null || typeof obj !== "object") return obj;
            if (Array.isArray(obj)) return obj.map(_transform);

            const keys = Object.keys(obj);
            if (!keys.length) return obj;

            return keys.reduce(
                (_obj, field) => {
                    const newName = nameIgnorePredicate?.(field)
                        ? field
                        : transformer.transform(field);

                    // @ts-expect-error It just works
                    _obj[newName] = _transform(obj[field]);

                    return _obj;
                },
                {} as Record<string, unknown>,
            );
        }

        return _transform(obj) as O;
    }

    return transform;
}
