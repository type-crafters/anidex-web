<script lang="ts">
    import type { PictureSource } from "$common/interface";
    import ClickToView from "./ClickToView.svelte";

    interface IMediaCast {
        characterName: string;
        characterPicture: Array<string | PictureSource>;
        actorName: string;
    }

    const { characterName, characterPicture, actorName }: IMediaCast = {
        characterName: "Link",
        characterPicture: ["/img/link-profile-picture.png"],
        actorName: "Akira Sasanuma",
    };
</script>

<figure class="relative flex flex-col gap-4 items-center p-4 bg-neutral-700/50 rounded-lg">
    <div class="w-42 aspect-square h-auto rounded-full overflow-hidden">
        <ClickToView picture={characterPicture} alt={`${characterName} (character)`}/>
    </div>
    <figcaption class="text-center space-y-1">
        <h3 class="text-xl font-semibold">{characterName}</h3>
        <p class="opacity-60">Voiced by</p>
        <h4 class="text-lg font-semibold">
            <a href={`/talent/${encodeURIComponent(actorName)}`} class="flex items-center gap-2 hover:underline">
                <span>{actorName}</span>
                <i class="bi bi-box-arrow-up-right text-xs"></i>
            </a>
        </h4>
    </figcaption>
</figure>
