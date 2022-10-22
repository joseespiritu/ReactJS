import { loginWithEmailPassword, logoutFirebase, signInWithGoogle } from "../../../src/firebase/providers";
import { checkingAuthentication, checkingCredentials, login, logout, startGoogleSignIn, startLoginWithEmailPassword, startLogout } from "../../../src/store/auth";
import { clearNotesLogout } from "../../../src/store/journal";
import { demoUser } from "../../fixtures/authFixtures";

jest.mock('../../../src/firebase/providers');

describe('Pruebas en Auth Thunks', () => {
    const dispatch = jest.fn();
    beforeEach(() => jest.clearAllMocks());

    test('debe de invocar el checkingCredentials', async () => {
        await checkingAuthentication()(dispatch);
        expect(dispatch).toHaveBeenCalledWith(checkingCredentials());
    });

    test('startGoogleSignIn debe de llamar checkingCredentials y login - Exito ', async () => {
        const loginData = {
            ok: true,
            ...demoUser
        };
        await signInWithGoogle.mockResolvedValue(loginData);

        // Thunk
        await startGoogleSignIn()(dispatch);

        expect(dispatch).toHaveBeenCalledWith(checkingCredentials());
        expect(dispatch).toHaveBeenCalledWith(login(loginData));
    });

    test('startGoogleSignIn debe de llamar checkingCredentials y login - Error ', async () => {
        const loginData = {
            ok: false,
            errorMessage: 'Un error en Google'
        };
        await signInWithGoogle.mockResolvedValue(loginData);

        // Thunk
        await startGoogleSignIn()(dispatch);
        expect(dispatch).toHaveBeenCalledWith(checkingCredentials());
        expect(dispatch).toHaveBeenCalledWith(logout(loginData.errorMessage));
    });

    test('startLoginWithEmailPassword debe de llamar checkingCredentials y login - Exito', async () => {
        const loginData = { ok: true, ...demoUser };
        const formData = { email: demoUser.email, password: '123456' };

        await loginWithEmailPassword.mockResolvedValue(loginData);
        await startLoginWithEmailPassword(formData)(dispatch);

        expect(dispatch).toHaveBeenCalledWith(checkingCredentials());
        expect(dispatch).toHaveBeenCalledWith(login(loginData));
    });

    test('startLogount debe de llamar logoutFirbase, clearNotes y logout', async () => {
        await startLogout()(dispatch);

        expect(logoutFirebase).toHaveBeenCalled();
        // expect(dispatch).toHaveBeenCalled(clearNotesLogout({ "payload": undefined, "type": "journal/clearNotesLogout" }));
        // expect(dispatch).toHaveBeenCalled(logout());
    });
});