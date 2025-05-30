<script lang="ts">
  import { cn } from "@utils";

  interface Props {
    currentPage: number;
    maxPage: number;
    pagedRouteComposer: (page: number) => string;
  }

  const { currentPage, maxPage, pagedRouteComposer }: Props = $props();
  let activePage = $state(currentPage);

  const MAX_VISIBLE_PAGES_NUMBER = 4;

  const pageCommonStyle = "box-border border-[1px] rounded-md w-8 text-center";
  const pageNonActiveStyle =
    "text-gray-500 hover:text-white hover:bg-gray-400 dark:text-gray-400 dark:hover:text-black dark:hover:bg-gray-200";
  const pageActiveStyle =
    "text-white bg-black hover:text-white-300 hover:bg-gray-700 dark:text-black dark:bg-white dark:hover:text-black dark:hover:bg-gray-300";

  /**
   * pageNumbersReducer generates an array of page numbers to display in the pagination.
   * the array consist of page numbers that has maximum length of MAX_VISIBLE_PAGES_NUMBER.
   * if page 1 or maxPage is not included in the array, it will be added to the beginning or end of the array respectively.
   * this is to use for pagination display in the UI spread to last or first page.
   */
  function pageNumbersReducer(currentPage: number, maxPage: number): number[] {
    let pageNumbers: number[] = [];
    if (maxPage <= 0) {
      pageNumbers.push(1);
      return pageNumbers;
    }
    if (currentPage <= MAX_VISIBLE_PAGES_NUMBER) {
      pageNumbers = Array.from(
        { length: Math.min(maxPage, MAX_VISIBLE_PAGES_NUMBER) },
        (_, i) => i + 1,
      );
    } else if (currentPage > maxPage - MAX_VISIBLE_PAGES_NUMBER) {
      pageNumbers = Array.from(
        { length: MAX_VISIBLE_PAGES_NUMBER },
        (_, i) => maxPage - MAX_VISIBLE_PAGES_NUMBER + i + 1,
      );
    } else {
      const start = Math.max(
        1,
        currentPage - Math.floor(MAX_VISIBLE_PAGES_NUMBER / 2),
      );
      const end = Math.min(maxPage, start + MAX_VISIBLE_PAGES_NUMBER - 1);
      pageNumbers = Array.from(
        { length: end - start + 1 },
        (_, i) => start + i,
      );
    }

    if (pageNumbers[0] !== 1) {
      pageNumbers.unshift(1);
    }
    if (pageNumbers[pageNumbers.length - 1] !== maxPage) {
      pageNumbers.push(maxPage);
    }

    return pageNumbers;
  }

  const pageNumbers = pageNumbersReducer(currentPage, maxPage);
</script>

<div class="flex flex-row gap-1">
  {#each pageNumbers as page, index (page)}
    <a
      href={pagedRouteComposer(page)}
      class={cn(
        pageCommonStyle,
        page === activePage ? pageActiveStyle : pageNonActiveStyle,
      )}
    >
      <span>
        {page}
      </span>
    </a>
    {#if index < pageNumbers.length - 1 && pageNumbers[index + 1] - pageNumbers[index] > 1}
      <span class="text-black dark:text-white font-bold transform translate-y-1"
        >...</span
      >
    {/if}
  {/each}
</div>
