<template>
 <ul class="pagination">
    <li 
      class="pagination-item"
    >
      <button 
        type="button" 
        @click="onClickFirstPage"
        :disabled="isInFirstPage"
        aria-label="Go to first page"
      >
        First
      </button>
    </li>

    <li
      class="pagination-item"
    >
      <button 
        type="button" 
        @click="onClickPreviousPage"
        :disabled="isInFirstPage"
        aria-label="Go to previous page"
      >
        Previous
      </button>
    </li>

    <li v-for="page in pages" class="pagination-item">
      <button 
        type="button" 
        @click="onClickPage(page.name)"
        :disabled="page.isDisabled"
        :class="{ active: isPageActive(page.name) }"
        :aria-label="`Go to page number ${page.name}`"
        
      >
        {{ page.name }}
      </button>
    </li>

    <li class="pagination-item">
      <button 
        type="button" 
        @click="onClickNextPage"
        :disabled="isInLastPage"
        aria-label="Go to next page"
      >
        Next
      </button>
    </li>

    <li class="pagination-item">
      <button 
        type="button" 
        @click="onClickLastPage"
        :disabled="isInLastPage"
        aria-label="Go to last page"
      >
        Last
      </button>
    </li>
  </ul>
</template>
<script>

</script>

