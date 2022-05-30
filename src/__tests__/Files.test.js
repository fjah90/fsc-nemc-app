import { loadFilesSuccess, LOAD_FILES } from '../application/actions/files';
import filesMiddleware from '../application/middleware/files';

describe('files middleware', () => {
    describe('load files flow', () => {
        const [loadFilesFlow] = filesMiddleware;

        const dummyFile = {
            id: '1',
            title: 'Dummy file',
            completed: true,
        };
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

        it('calls api.files.getAll at least once dispatch', async () => {
            await loadFilesFlow({ api })({ dispatch })(next)(action);

            expect(dispatch).toHaveBeenCalledWith(loadFilesSuccess([dummyFile]));
        });
    });
});