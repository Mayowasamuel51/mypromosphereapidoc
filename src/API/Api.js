
import Header from "./Header"


function Api() {
    return (
        <div>
            <Header/>
            <div>
                <h3>list of  payment level</h3>
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
                                        <td class="whitespace-nowrap  px-6 py-4">  This carousel will showcase videos from the 28,000 high-paying individuals.  </td>
                                    </tr>
                                    <tr class="border-b dark:border-neutral-500">

                                        <td class="whitespace-nowrap  px-6 py-4 ">/api/ recommendationtopvideoid/video_id</td>
                                        <td class="whitespace-nowrap  px-6 py-4">GET</td>
                                        <td class="whitespace-nowrap  px-6 py-4">This will retrieve the specific video you've selected and display its pertinent <br/>information. i will communicate on a list of the details that should be included.</td>
                                    </tr>
                                    <tr class="border-b dark:border-neutral-500">

                                        <td colspan="2" class="whitespace-nowrap  px-6 py-4">
                                            Larry the Bird
                                        </td>
                                        <td class="whitespace-nowrap  px-6 py-4">@twitter</td>
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

export default Api;