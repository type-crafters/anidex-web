<script lang="ts">
    import { page } from "$app/state";
    import type { INavLink } from "$common/interface";

    const navigation: Array<INavLink> = [
        { href: "/anime", text: "Anime" },
        { href: "/webtoons", text: "Webtoons" }
    ];

    console.log(page.route.id);
</script>

<header class="w-full px-4 lg:px-8 xl:px-12 py-2 shadow-lg sticky top-0 flex items-center bg-neutral-800 z-50">
    <div class="flex-1">
        <a href="/" class="text-3xl font-bold">
            <span>Ani</span><span class="text-pink-600">Dex</span>
        </a>
    </div>
    <div>
        <nav>
            <ul class="flex gap-6 text-lg">
                {#each navigation as nav, i (i)}
                    <li class={["hover:text-pink-600 duration-200", page.url.pathname === nav.href && "text-pink-600"]}><a href={nav.href}>{nav.text}</a></li>
                {/each}
            </ul>
        </nav>
    </div>
</header>
