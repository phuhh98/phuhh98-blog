<script lang="ts">
  import { siteConfig } from "@site-config";

  const today = new Date();
</script>

<footer
  class="flex justify-center items-center w-full md:px-16 h-12 border-t-2"
>
  &copy; {today.getFullYear()}
  {siteConfig.author}. All rights reserved.
</footer>
