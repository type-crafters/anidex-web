<script lang="ts">
    import Alert from "$lib/Alert.svelte";
    import CastingCard from "$lib/CastingCard.svelte";
    import Comment from "$lib/Comment.svelte";
    import EpisodeCard from "$lib/EpisodeCard.svelte";
    import MediaBanner from "$lib/MediaBanner.svelte";

    const details = {
        "No. of seasons": 1,
        "No. of episodes": 12,
        "Studios": ["Mappa"],
        "Avg. duration": "24 min",
        "Rating": "R (17+)"
    }

    const props = {
        picture: ["/img/placeholder.svg"],
        title: "Chainsaw Man",
        categories: [
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
<div class="container mx-auto my-8">
    <Alert class="flex items-center gap-2">
        <i class="bi bi-exclamation-circle"></i>
        <p>AniDex does not host or index clandestine content of any kind.</p>
    </Alert>
</div>
<main id="anime-info" class="container mx-auto px-4 flex gap-4">
    <aside class="flex-1 px-4">
        <h2 class="text-xl font-semibold">Details</h2>
        <hr class="my-1 opacity-40" />
        <div class="grid gap-2 my-4">
            {#each Object.entries(details) as [key, value]}
                <div>
                    <span class="font-semibold">{key}:</span>
                    <span>{value}</span>
                </div>
            {/each}
        </div>
    </aside>
    <div class="flex-3 px-4 space-y-6">
        <section id="episodes">
            <h2 class="text-xl font-semibold">Episodes</h2>
            <hr class="my-1 opacity-40" />
            <div class="flex flex-col my-4 gap-4">
                <EpisodeCard />
                <EpisodeCard />
                <EpisodeCard />
                <EpisodeCard />
                <EpisodeCard />
            </div>
        </section>
        <section id="cast">
            <h2 class="text-xl font-semibold">Characters</h2>
            <hr class="my-1 opacity-40" />
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 my-4 gap-4">
                <CastingCard />
                <CastingCard />
                <CastingCard />
                <CastingCard />
            </div>
        </section>
        <section id="cast">
            <h2 class="text-xl font-semibold">Comments</h2>
            <hr class="my-1 opacity-40" />
            <div class="flex flex-col my-4 gap-4">
                <Comment />
                <Comment />
                <Comment />
            </div>
        </section>
    </div>
</main>
