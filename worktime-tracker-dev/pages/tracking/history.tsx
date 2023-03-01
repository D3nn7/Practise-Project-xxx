import NavBar from "../../components/navigation/NavBarTracking";
import NoTrackedTimes from "../../components/history/NoTrackedTimes";
import { IHistoryBoxProps } from "../../lib/types/props";
import HistoryIndex from "../../components/history/Index";

export default function History() {
    const histories = [
        // {
        //     description: "Add LinkedIn Post",
        //     category: "Marketing",
        //     timeSum: "00:38:15",
        //     duration: "06.12.2022 15:23 PM - 06.12.2022 15:50 PM",
        // },
        // {
        //     description: "Add LinkedIn Post",
        //     category: "Marketing",
        //     timeSum: "00:38:15",
        //     duration: "06.12.2022 15:23 PM - 06.12.2022 15:50 PM",
        // },
        // {
        //     description: "Add LinkedIn Post",
        //     category: "Marketing",
        //     timeSum: "00:38:15",
        //     duration: "06.12.2022 15:23 PM - 06.12.2022 15:50 PM",
        // },
        // {
        //     description: "Add LinkedIn Post",
        //     category: "Marketing",
        //     timeSum: "00:38:15",
        //     duration: "06.12.2022 15:23 PM - 06.12.2022 15:50 PM",
        // },
        // {
        //     description: "Add LinkedIn Post",
        //     category: "Marketing",
        //     timeSum: "00:38:15",
        //     duration: "06.12.2022 15:23 PM - 06.12.2022 15:50 PM",
        // },
        // {
        //     description: "Add LinkedIn Post",
        //     category: "Marketing",
        //     timeSum: "00:38:15",
        //     duration: "06.12.2022 15:23 PM - 06.12.2022 15:50 PM",
        // },
    ] as IHistoryBoxProps[];
    return (
        <div>
            <NavBar />
            {histories.length === 0 ? (
                <NoTrackedTimes />
            ) : (
                <HistoryIndex histories={histories} />
            )}
        </div>
    );
}
