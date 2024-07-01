<script>
import TagList from './components/TagList';

export default {
  name: 'App',

  components: {
    TagList,
  },

    data: () => ({
        tags: [
            {
                text: '4,3',
                icon: 'mdi-star-outline'
            },
            {
                text: 'Фридландские ворота',
            },
            {
                text: '1,2 км от вас',
            },
            {
                text: 'sometext1',
            },
            {
                text: 'sometext2',
            },
        ]
    }),
};
</script>

<template>
    <v-app>
        <v-main>

            <div class="demonstration">
                <span>Ширина 100%, выравнивание по левому краю</span>
                <div class="full">
                    <TagList :tags="tags" alignment="left"/>
                </div>

                <span>Ширина 100%, выравнивание по ширине</span>
                <div class="full">
                    <TagList :tags="tags" alignment="between"/>
                </div>

                <span>Ширина 50%, выравнивание по левому краю</span>
                <div class="half">
                    <TagList :tags="tags" alignment="left"/>
                </div>

                <span>Ширина 50%, выравнивание по ширине</span>
                <div class="half">
                    <TagList :tags="tags" alignment="between"/>
                </div> 
            </div>
            
        </v-main>
    </v-app>
</template>

<style lang="scss">
    .demonstration {
        padding: 1rem;

        & > div {
            margin-bottom: 0.5rem;

            &:last-child {
                margin-bottom: 0;
            }
        }
    }
    .full {
        width: 100%;
    }
    .half {
        width: 50%;
    }
</style>
