
import Header from "./Header"


function Api() {
    return (
        <div style={{ marginBottom: '300px' }}>
            {/* <Header /> */}
            <h1 className="font-bold pt-9">MYPROMOSPHERE API VERSION FOR  WEB</h1>
            <div>
                <h3>list of  payment levels</h3>
                7day ==== 4950
                <br />
                14 days === 10100
                <br />
                28 days  === 16350


            </div>
            <div class="flex flex-col">
                <div class="overflow-x-auto sm:-mx-6 lg:-mx-8">
                    <div class="inline-block min-w-full py-2 sm:px-6 lg:px-8">
                        <div class="overflow-hidden">
                            <table class="min-w-full text-center text-sm font-light">
                                <thead
                                    class="border-b bg-neutral-800 font-medium text-white dark:border-neutral-500 dark:bg-neutral-900">
                                    <tr>

                                        <th scope="col" class=" px-6 py-4">Endpoint</th>
                                        <th scope="col" class=" px-6 py-4">Method</th>
                                        <th scope="col" class=" px-6 py-4">Description</th>
                                    </tr>
                                </thead>
                                <tbody class="font-bold">
                                    <tr class="border-b dark:border-neutral-500 font-bold">

                                        <td class="whitespace-nowrap  px-6 py-4">
                                            /api/recommendationtop
                                        </td>
                                        <td class="whitespace-nowrap  px-6 py-4">GET</td>
                                        <td class="whitespace-nowrap  px-6 py-4">  This carousel will showcase videos from the 28,000 high-paying  <br />individuals. the videos will be playing (but will be on muted)
                                            <br />
                                            --header "Content-Type: application/json"
                                            <br />
                                            --header "Accept: application/json"
                                        </td>
                                    </tr>
                                    <tr class="border-b dark:border-neutral-500">

                                        <td class="whitespace-nowrap  px-6 py-4 ">/api/ recommendationtopvideoid/{'{video_id}'}</td>
                                        <td class="whitespace-nowrap  px-6 py-4">GET</td>
                                        <td class="whitespace-nowrap  px-6 py-4">This will retrieve the specific video you've selected and display its pertinent <Break /> information. i will communicate on a list of the details that should be included.
                                            <HeaderApi />

                                        </td>
                                    </tr>
                                    <tr class="border-b dark:border-neutral-500">
                                        <td class="whitespace-nowrap  px-6 py-4">
                                            /api/trendingservices
                                        </td>
                                        <td class="whitespace-nowrap  px-6 py-4"><i class="fa fa-get-pocket" aria-hidden="true"></i>GET</td>

                                        <td class="whitespace-nowrap  px-6 py-4">This will feature the trending services in a dynamic carousel.</td>
                                    </tr>
                                    <tr class="border-b dark:border-neutral-500">
                                        <td class="whitespace-nowrap  px-6 py-4">
                                            /api/trending/{'{categories}'}
                                        </td>
                                        <td class="whitespace-nowrap  px-6 py-4"><i class="fa fa-get-pocket" aria-hidden="true"></i>GET</td>

                                        <td class="whitespace-nowrap  px-6 py-4">
                                            This will showcase sellers who are posting within this category.
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>


        </div>
    )
}




function Break() {
    return <br />
}

function HeaderApi() {
    return (
        <div>
            <br />
            --header "Content-Type: application/json"
            <br />
            --header "Accept: application/json"
        </div>
    )
}
export default Api;