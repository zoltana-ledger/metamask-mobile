'use strict';
import TestHelpers from '../helpers';

import OnboardingView from '../pages/Onboarding/OnboardingView';
import OnboardingCarouselView from '../pages/Onboarding/OnboardingCarouselView';
import ImportWalletView from '../pages/Onboarding/ImportWalletView';

import MetaMetricsOptIn from '../pages/Onboarding/MetaMetricsOptInView';
import WalletView from '../pages/WalletView';

const Correct_Seed_Words = 'fold media south add since false relax immense pause cloth just raven';
const Correct_Password = `12345678`;

describe('Addressbook Tests', () => {
	beforeEach(() => {
		jest.setTimeout(150000);
	});

	it('should import via seed phrase and validate in settings', async () => {
		await OnboardingCarouselView.isVisible();
		await OnboardingCarouselView.tapOnGetStartedButton();

		await OnboardingView.isVisible();
		await OnboardingView.tapImportWalletFromSeedPhrase();

		await MetaMetricsOptIn.isVisible();
		await MetaMetricsOptIn.tapAgreeButton();

		await ImportWalletView.isVisible();
	});

	it('should attempt to import wallet with invalid secret recovery phrase', async () => {
		await ImportWalletView.enterSecretRecoveryPhrase(Correct_Seed_Words);
		await ImportWalletView.enterPassword(Correct_Password);
		await ImportWalletView.reEnterPassword(Correct_Password);

		await WalletView.isVisible();
		///
	});

	it('should dismiss the onboarding wizard', async () => {
		// dealing with flakiness
		await TestHelpers.delay(1000);
		try {
			// Check that the onboarding wizard is present
			await TestHelpers.checkIfVisible('onboarding-wizard-step1-view');
			// Check that No thanks CTA is visible and tap it
			await TestHelpers.waitAndTap('onboarding-wizard-back-button');
			// Check that the onboarding wizard is gone
			await TestHelpers.checkIfNotVisible('onboarding-wizard-step1-view');
		} catch (e) {
			//
		}
	});

	it('should deep link', async () => {
		const secondURL = 'https://metamask.app.link/send/0xB8B4EE5B1b693971eB60bDa15211570df2dB228A@1?value=1e15';
		await device.sendToHome();

		await device.launchApp({
			newInstance: false,
			secondURL,
			//sourceApp: 'io.metamask'
		});
		//await TestHelpers.checkIfVisible('login');

		// await TestHelpers.typeTextAndHideKeyboard('login-password-input', PASSWORD);
		// await TestHelpers.delay(3000)

		//await TestHelpers.goToURL("https://metamask.app.link/send/0x3dD3DfaAdA4d6765Ae19b8964E2BAC0139eeCb40@4/approve?address=0x178e3e6c9f547A00E33150F7104427ea02cfc747&uint256=5e8")
		//await TestHelpers.goToURL("https://metamask.app.link/dapp/uniswap.eth")
	});
});
