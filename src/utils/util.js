export default class util {
    static wait(ms) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve();
            }, ms)
        });
    };
};
