import { View, Text, ScrollView } from "react-native"
import FeedCard from "../components/FeedCard";

export default function Dev() {

    return (
        <ScrollView>
            <FeedCard
                username="Name"
                date="14 January 2024"
                workoutName="Leg Day"
                duration="1hr20"
                calories="175 cals"
                photoUrl="https://picsum.photos/200/300" />
            <FeedCard
                username="Name"
                date="14 January 2024"
                workoutName="Leg Day"
                duration="1hr20"
                calories="175 cals"
                photoUrl="https://picsum.photos/200/300" />
            <FeedCard
                username="Name"
                date="14 January 2024"
                workoutName="Leg Day"
                duration="1hr20"
                calories="175 cals"
                photoUrl="https://picsum.photos/200/300" />
        </ScrollView>
    )
}