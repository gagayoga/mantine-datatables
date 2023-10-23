import { useQueryProdutcts } from "./service";

const HomeFeature = () => {
    const { data, isFetching } = useQueryProdutcts(0);

    console.log(data, isFetching);
    return (
        <main>
            <h1>Halaman Home</h1>
        </main>
    )
}

export default HomeFeature;