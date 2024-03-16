export function uniteRegexp(
    patterns: (string | RegExp)[],
    flags?: string,
) {
    const _flags = flags?.split("") ?? [];

    const _patterns = patterns.map(pattern => {
        if (typeof pattern === "string") return pattern;

        _flags.push(...pattern.flags.split(""));

        return String(pattern).slice(1, -pattern.flags.length - 1);
    });

    return new RegExp(_patterns.join("|"), [...new Set(_flags)].join(""));
}
