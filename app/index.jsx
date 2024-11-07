import { Link } from "expo-router";
import { Text, View } from "react-native";

import { GoogleSignin } from '@react-native-google-signin/google-signin';
import {
	GOOGLE_WEB_CLIENT_ID,
	GOOGLE_ANDROID_CLIENT_ID,
	// GOOGLE_IOS_CLIENT_ID,
} from '@env';

GoogleSignin.configure({
	webClientId: GOOGLE_WEB_CLIENT_ID,
	androidClientId: GOOGLE_ANDROID_CLIENT_ID,
	// iosClientId: GOOGLE_IOS_CLIENT_ID,
	scopes: ['profile', 'email'],
});
const GoogleLogin = async () => {
	await GoogleSignin.hasPlayServices();
	const userInfo = await GoogleSignin.signIn();
	return userInfo;
};

export default function Index() {

	const [error, setError] = useState('');
	const [loading, setLoading] = useState(false);

	const handleGoogleLogin = async () => {
		setLoading(true);
		try {
			const response = await GoogleLogin();
			const { idToken, user } = response;

			if (idToken) {
				const resp = await authAPI.validateToken({
					token: idToken,
					email: user.email,
				});
				await handlePostLoginData(resp.data);
			}
		} catch (apiError) {
			setError(
				apiError?.response?.data?.error?.message || 'Something went wrong'
			);
		} finally {
			setLoading(false);
		}
	};
  async function handleGoogleLogout() {
    try {
      await GoogleSignin.signOut();
      // Perform additional cleanup and logout operations.
    } catch (error) {
      console.log('Google Sign-Out Error: ', error);
    }
  }




// export default function Index() {
  return (
    <View
      className="grid text-center h-full items-center justify-center bg-blue-300"
    >
      <Text className=" text-orange-600 text-[60px] text-center font-bold"  >Welcome to Hawawii</Text>
      <Link href="/home" className="mt-8 text-green-600 text-xl" >
        {'continue'}
      </Link>
      <Pressable onPress={handleGoogleLogin}>Continue with Google</Pressable>

    </View>
  );
}
