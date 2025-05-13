function mergeConfig(target, source) {
    // Vulnerable to prototype pollution
    for (const key in source) {
        if (typeof source[key] === 'object' && source[key] !== null) {
            if (!target[key]) target[key] = {};
            mergeConfig(target[key], source[key]);
        } else {
            target[key] = source[key];
        }
    }
    return target;
}

// Later used with user input:
// mergeConfig({}, JSON.parse(userInput));
