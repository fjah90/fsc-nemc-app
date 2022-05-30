import { loadFilesSuccess, LOAD_FILES } from '../application/actions/files';
import filesMiddleware from '../application/middleware/files';

describe('files middleware', () => {
    describe('load files flow', () => {
        const [loadFilesFlow] = filesMiddleware;

        const dummyFile = [
            {
                file: 'test1.csv',
                lines: [
                    {
                        text: "some text",
                        number: 11234,
                        hex: "some hex text",
                    },
                    {
                        text: "some text",
                        number: 21234,
                        hex: "some hex text",
                    },
                    {
                        text: "some text",
                        number: 31234,
                        hex: "some hex text",
                    }
                ]
            }
        ];
        const api = {
            files: {
                getAll: jest.fn().mockImplementationOnce(() => new Promise((resolve) => resolve([dummyFile])))
            }
        }
        const dispatch = jest.fn();
        const next = jest.fn();
        const action = {
            type: LOAD_FILES
        }


        it('passes action to next middleware', async () => {
            await loadFilesFlow({ api })({ dispatch })(next)(action);

            expect(next).toHaveBeenCalledWith(action);
        });

        it('calls api.files.getAll at least once', async () => {
            await loadFilesFlow({ api })({ dispatch })(next)(action);

            expect(api.files.getAll).toHaveBeenCalled();
        });
    });
});