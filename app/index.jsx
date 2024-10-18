import { Link } from "expo-router";
import { Text, View } from "react-native";


export default function Index() {
  return (
    <View
      className="grid text-center h-full items-center justify-center bg-blue-300"
    >
      <Text className=" text-orange-600 text-[60px] text-center font-bold"  >Welcome to Hawawii</Text>
      <Link href="/home" className="mt-8 text-green-600 text-xl" >{'continue'}</Link>

    </View>
  );
}
