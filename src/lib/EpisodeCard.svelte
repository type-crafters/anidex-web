<script lang="ts">
    import type { IMediaEpisode } from "$common/interface";
    import ClickToView from "./ClickToView.svelte";

    const {
        thumbnail,
        seasonNo,
        episodeNo,
        title,
        releaseDate,
        overview,
    }: IMediaEpisode = {
        thumbnail: ["/img/placeholder.svg"],
        seasonNo: 1,
        episodeNo: 1,
        title: "Dog & Chainsaw",
        releaseDate: new Date().toISOString(),
        overview:
            "Denji is a teenager who lives his life as a Devil Hunter. Aiming to " +
            "pay off the debt he inherited from his father, he starts hunting " +
            'devils for the yakuza with his buddy Pochita, a "Chainsaw Devil", ' +
            "while living a tragically poor life. Just when things seem like they " +
            "couldn't get any worse, Denji gets betrayed and killed by the " +
            "yakuza. As Denji starts passing out, he hears someone calling from " +
            "inside his head...",
    };
</script>

<figure class="w-full py-4 flex flex-col lg:flex-row gap-6">

        <ClickToView
            picture={thumbnail}
            alt={`Thumbnail for ${title ? `"${title}"` : `Season ${seasonNo} Episode ${episodeNo}`}`}
            class="w-full lg:w-64 aspect-video h-auto overflow-hidden bg-neutral-800"
        />
    <figcaption class="space-y-1 flex-1">
        <h2 class="text-xl font-semibold">
            Season {seasonNo} - Episode {episodeNo}{#if title}: {title}{/if}
        </h2>
        <p class="flex gap-2 opacity-60 text-sm">
            <i class="bi bi-calendar"></i>
            <time datetime={releaseDate}>
                {new Intl.DateTimeFormat("en-US", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                }).format(new Date(releaseDate))}
            </time>
        </p>
        <p class="line-clamp-4">
            {#if overview}
                {overview}
            {:else}
                No additional information
            {/if}
        </p>
    </figcaption>
</figure>
