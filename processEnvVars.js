const processEnvVarsSingle = str =>
    str.replace(/%(\w+)%/g, (match, p1) => {
        return process.env[p1] ? process.env[p1] : '';
    });

module.exports = dict =>
    Object.keys(dict).reduce((output, key) => {
        const value = dict[key];
        const processedValue = processEnvVarsSingle(value);
        output[key] = processedValue;
        return output;
    }, {});
