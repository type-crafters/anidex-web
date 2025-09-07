<script lang="ts">
    import type { IMediaBanner } from "$common/interface";
    import EpisodeCard from "$lib/EpisodeCard.svelte";
    import MediaBanner from "$lib/MediaBanner.svelte";

    const details = {
        "No. of episodes": 12,
        Status: "Finished Airing",
        Aired: new Date(),
    };

    const props: IMediaBanner = {
        picture: ["/img/placeholder.svg"],
        title: "Chainsaw Man",
        genres: [
            { id: 0, name: "Action", href: "/categories/action" },
            { id: 1, name: "Shonen", href: "/categories/shonen" },
            { id: 2, name: "Supernatural", href: "/categories/supernatural" },
        ],
        overview:
            "Denji is a young boy who works as a Devil Hunter with the " +
            '"Chainsaw Devil"' +
            " " +
            "Pochita. One day, as he was living his miserable " +
            "life trying to pay off the debt he inherited from his parents, he got " +
            "betrayed and killed. As he was losing his consciousness, he made a deal " +
            "with Pochita, and got resurrected as the " +
            '"Chainsaw Man"' +
            ": the owner of the Devil's heart.",
    };
</script>

<MediaBanner {...props} />
<main id="anime-info" class="container mx-auto my-8 px-4 flex gap-4">
    <aside class="flex-1 px-4">
        <h2 class="text-xl font-semibold">Details</h2>
        <hr class="my-1 opacity-40" />
    </aside>
    <div class="flex-3 px-4">
        <section>
            <h2 class="text-xl font-semibold">Episodes</h2>
            <hr class="my-1 opacity-40" />
            <div class="flex flex-col gap-4">
                <EpisodeCard />
                <EpisodeCard />
                <EpisodeCard />
                <EpisodeCard />
                <EpisodeCard />
            </div>
        </section>
    </div>
</main>
