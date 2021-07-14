import {useRouter} from "next/router";
import Page from "../../components/Page";
export default function project() {
    const router = useRouter()
    const {project} = router.query;
    return (
        <Page>
            <h1>{project}</h1>
        </Page>
    )
}
