import * as test from 'tape';
declare global {
    namespace NodeJS {
        interface Global {
            __coverage__: string;
        }
    }
}
export { test };
