<script lang="ts">
    let { picture, title, categories, overview } = $props();
</script>

<figure id="media-banner" class="w-full">
    <div
        id="picture-container"
        class="relative w-full aspect-[22/7] h-auto bg-neutral-600 overflow-hidden"
    >
        <div
            id="fade-overlay"
            class="absolute inset-0 bg-linear-to-b from-60% from-transparent to-95% to-black"
        ></div>
        <picture id="media-picture" class="w-full h-full overflow-hidden">
            {#each picture as source}
                {#if typeof source === "string"}
                    <img
                        src={source}
                        alt={"Banner for " + title}
                        class="w-full h-full object-cover object-center"
                    />
                {:else}
                    <source media={source.media} srcset={source.srcset} />
                {/if}
            {/each}
        </picture>
    </div>
    <figcaption id="media-info" class="px-8 py-4 bg-black space-y-4">
        <div id="media-title">
            <h1 class="text-4xl font-semibold">{title}</h1>
        </div>
        <div id="media-details" class="space-y-4">
            <ul id="media-categories" class="flex gap-4">
                {#each categories as cat (cat.id)}
                    <li>
                        <a
                            href={cat.href}
                            class="text-white/80 bg-neutral-800 uppercase px-2 py-0.5 font-semibold rounded hover:bg-neutral-700 duration-200"
                        >{cat.name}</a>
                    </li>
                {/each}
            </ul>
            <div id="action-buttons">
                <button
                    aria-label="Add to watchlist"
                    class="bg-pink-800 hover:bg-pink-900 active:bg-pink-950 duration-150 px-4 py-2 cursor-pointer"
                >
                    <i class="bi bi-bookmark"></i>
                    <span class="uppercase">Add to watchlist</span>
                </button>
            </div>
            <p id="media-overview">{overview}</p>
        </div>
    </figcaption>
</figure>
