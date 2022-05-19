<template>
  <div class="app__wrapper">
    <div class="app__header">
      <p class="app__header-title">
        Introduce to IT. Your way.
        <a class="app__header-link" href="https://roadmap.sh/frontend" target="_blank">Roadmap</a>
      </p>
      <div class="app__navigation">
        <div
                v-for="item in listArray"
                :key="item"
                class="app__navigation-item"
        >
          <a class="app__navigation-link" :href="`#${item.title}`">
            {{ item.title }}
          </a>
        </div>
      </div>
    </div>
    <div class="app__content">
      <List :items="listArray" />
    </div>
  </div>
</template>

<script>
import List from "./components/List";
export default {
  name: "App",
  components: { List },
  data() {
    return {
      listArray: [
        {
          title: 'Youtube',
          items: {
            0: {
              id: 1,
              name: 'Фрилансер по жизни',
              description: 'Основы HTML и CSS',
              mainLink: 'https://www.youtube.com/c/FreelancerLifeStyle',
              customLinks: {
                0: {
                  customLinkText: 'Плейлист по верстке',
                  customLink: 'https://www.youtube.com/watch?v=BsQd9uOHjMM&list=PLM6XATa8CAG4uCli-pMvuvwj46UaQoqIc'
                },
              },
            },
            1: {
              id: 2,
              name: 'WebDev с нуля. Канал Алекса Лущенко',
              description: 'Объясняет очень подробно и на примерах, в плейлистах можешь посмотреть Javascript 2.0',
              mainLink: 'https://www.youtube.com/c/itgid',
              customLinks: {
                0: {
                  customLinkText: 'Курс Javascript 2.0',
                  customLink: 'https://www.youtube.com/watch?v=2phqy5-Fz1k&list=PLM7wFzahDYnEltE-aVGhRHYPwIJn0Xquu',
                },
                1: {
                  customLinkText: 'Курс практической верстки',
                  customLink: 'https://www.youtube.com/watch?v=duOJ9-CpF8Y&list=PLM7wFzahDYnF6V3FOkFMzwAwyJDlVP_kL'
                },
              },
            },
            2: {
              id: 3,
              name: 'Владилен Минин',
              description: 'Подходит для поверхностного ознакомления, курсы для начинаюших, но лучше не увлекаться потому что зачастую либо дезынфу дает, либо недоговаривает',
              mainLink: 'https://www.youtube.com/c/VladilenMinin',
              customLinks: {
                0: {
                  customLinkText: 'HTML для начинающих',
                  customLink: 'https://www.youtube.com/watch?v=DOEtVdkKwcU',
                },
                1: {
                  customLinkText: 'CSS для Начинающих',
                  customLink: 'https://www.youtube.com/watch?v=SpCUuyZZTp8'
                },
                2: {
                  customLinkText: 'JavaScript Основы для Начинающих',
                  customLink: 'https://www.youtube.com/watch?v=Bluxbh9CaQ0'
                },
              },
            },
            3: {
              id: 4,
              name: 'Kobezzza. Курсы по программированию',
              description: 'Лид фронта Яндекс.Едадил. Очень полезная инфа доступным языком',
              mainLink: 'https://www.youtube.com/channel/UCM2INkX1UkUWh7UZvphb9JQ/playlists',
              customLinks: {
                0: {
                  customLinkText: 'Делаем Stories как в Instagram',
                  customLink: 'https://www.youtube.com/watch?v=oQ3OII5w62w&list=PL-2HhTxLsB3md4cCrRUG_rO4a5ZsFMjb3'
                },
                1: {
                  customLinkText: 'Основы интернета и браузеров',
                  customLink: 'https://www.youtube.com/watch?v=yhoBqIjnUQw&list=PL-2HhTxLsB3lXTujWtmhhz6YLNAizc7eB'
                },
              },
            },
            4: {
              id: 5,
              name: 'Ulbi TV',
              description: 'Более advanced-уровень, но тоже очень подробное и глубокое объяснение',
              mainLink: 'https://www.youtube.com/c/UlbiTV',
            },
          },
        },
        {
          title: 'Docs',
          items: {
            0: {
              id: 1,
              name: 'Современный учебник JavaScript',
              description: 'Отличный учебник по JS. Для старта подойдет более чем.',
              mainLink: 'https://learn.javascript.ru/'
            },
            1: {
              id: 2,
              name: 'Mozilla Developer Network (MDN)',
              description: 'Документация по всему вебу, если у тебя есть вопросы или что-то не получается, то в документации есть ответ. Есть RU и En версии',
              mainLink: 'https://developer.mozilla.org/ru/docs/Learn'
            },
            2: {
              id: 3,
              name: 'Doka.guide',
              description: 'Документация, которая поддерживается создается и поддерживается сообществом (и Яндексом), есть интересные практические примеры и задачи',
              mainLink: 'https://doka.guide/',
              customLinks: {
                0: {
                  customLinkText: 'О проекте — Дока',
                  customLink: 'https://doka.guide/about/'
                },
              },
            }
          },
        },
        {
          title: 'Required tools',
          items: {
            0: {
              id: 1,
              name: 'Github',
              description: 'Мастхев, система контроля и управлением версиями. Обязательно заведи его себе',
              mainLink: 'https://github.com/'
            },
            1: {
              id: 2,
              name: 'Git',
              description: 'Не путать с Github. Загружать, клонировать, управлять версиями на Гитхабе ты будешь при помощи Гита',
              mainLink: 'https://git-scm.com/',
              customLinks: {
                0: {
                  customLinkText: 'Git и GitHub Курс Для Новичков',
                  customLink: 'https://www.youtube.com/watch?v=zZBiln_2FhM'
                },
                1: {
                  customLinkText: 'Большая часть функционала Гита',
                  customLink: 'https://www.youtube.com/watch?v=W4hoc24K93E&list=PLDyvV36pndZFHXjXuwA_NywNrVQO0aQqb'
                },
                2: {
                  customLinkText: 'Знакомство с Git и GitHub',
                  customLink: 'https://medium.com/nuances-of-programming/%D0%B7%D0%BD%D0%B0%D0%BA%D0%BE%D0%BC%D1%81%D1%82%D0%B2%D0%BE-%D1%81-git-%D0%B8-github-%D1%80%D1%83%D0%BA%D0%BE%D0%B2%D0%BE%D0%B4%D1%81%D1%82%D0%B2%D0%BE-%D0%B4%D0%BB%D1%8F-%D0%BD%D0%B0%D1%87%D0%B8%D0%BD%D0%B0%D1%8E%D1%89%D0%B8%D1%85-54ea2567d76c',
                }
              },
            },
            2: {
              id: 3,
              name: 'Node.js',
              description: 'Обязательно надо установить, работать без нее не получится, вдовесок с Нодой идет и пакетный менеджер NPM',
              mainLink: 'https://nodejs.org/en/',
              customLinks: {
                0: {
                  customLinkText: 'Краткое описание NPM',
                  customLink: 'https://ru.wikipedia.org/wiki/Npm'
                },
              },
            },
            3: {
              id: 4,
              name: 'Yarn',
              description: 'Как NPM, только лучше, быстрее и круче',
              mainLink: 'https://yarnpkg.com/'
            },
          },
        },
        {
          title: "IDE's and Code Editor's",
          items: {
            0: {
              id: 1,
              name: 'Visual Studio Code',
              description: 'Легкий, простой, самое то для старта. Есть куча пакетов и расширений прямо во внутренней библиотеке',
              mainLink: 'https://code.visualstudio.com/'
            },
            1: {
              id: 2,
              name: "Intellij IDE's",
              description: 'Продукты Intellij (Jet Brains) - это уже профессиональные узконаправленные программы, тяжелые, прожорливые, платные, но быстрые. Для фронта подойдет Webstorm и IDEA',
              mainLink: 'https://www.jetbrains.com/ru-ru/',
              customLinks: {
                0: {
                  customLinkText: 'Webstorm',
                  customLink: 'https://www.jetbrains.com/ru-ru/webstorm/'
                },
                1: {
                  customLinkText: 'Idea',
                  customLink: 'https://www.jetbrains.com/ru-ru/idea/'
                },
              },
            },
            2: {
              id: 3,
              name: 'Sublime Text',
              description: 'Устаревший, негибкий, но рабочий текстовы редактор. Не советую, но сам начинал с него',
              mainLink: 'https://www.sublimetext.com/',
            },
          },
        },
        {
          title: "Frameworks",
          text: "Распутье. Тут тебе уже придется сделать выбор на перспективу, попробовать стоит каждый, но выбрать один. Потом сможешь погрузиться и оставшиеся",
          items: {
            0: {
              id: 1,
              name: 'React',
              description: 'Самая популярная и востребованная UI JavaScript-библиотека для фронтенда, разработана и поддерживается Facebook (Meta) предназначенная для создания переиспользуемых пользовательских интерфейсов',
              mainLink: 'https://reactjs.org/',
              customLinks: {
                0: {
                  customLinkText: 'Ulbi TV React',
                  customLink: 'https://youtu.be/GNrdg3PzpJQ'
                },
                1: {
                  customLinkText: 'ТГ-канал сообщества Реакта',
                  customLink: 'https://t.me/react_js'
                },
              },
            },
            1: {
              id: 2,
              name: 'Vue',
              description: 'Еще один фронтенд фреймворк, но со своими плюшками и фишками, проще и понятнее, чем React, дышит ему в спину и очень активно отвоевывает позиции. Этот хелпер написан на Vue',
              mainLink: 'https://ru.vuejs.org/',
              customLinks: {
                0: {
                  customLinkText: 'Ulbi TV Vue',
                  customLink: 'https://youtu.be/XzLuMtDelGk'
                },
                1: {
                  customLinkText: 'Канал Ильи Климов',
                  customLink: 'https://www.youtube.com/c/JavascriptNinja'
                },
                2: {
                  customLinkText: 'ТГ-канал сообщества Vue',
                  customLink: 'https://t.me/react_js'
                },
              },
            },
            2: {
              id: 3,
              name: 'Angular',
              description: 'Фронтенд библиотека для больших и сложных enterprise-проектов, как и предыдущие инструменты имеет собственные приколдесы (RxJS, Streams). Новичку будет тяжеловато ИМХО. Разработан и поддерживается Google',
              mainLink: 'https://angular.io/',
              customLinks: {
                0: {
                  customLinkText: 'Обширный гайд по Angular',
                  customLink: 'https://www.youtube.com/watch?v=D3BZcJ6yeDk&list=PLHaJmpMCM3ahxeU4h058JX57ZP0dScqJ2'
                },
                1: {
                  customLinkText: 'KirJS',
                  customLink: 'https://www.youtube.com/c/kirjs'
                },
              },
            },
            3: {
              id: 4,
              name: 'Svelte',
              description: 'Молодой и пока сыроватый фреймворк, пока бы не использовал и не делал на него упор',
              mainLink: 'https://ru.svelte.dev/',
            },
          },
        },
        {
          title: "What more",
          text: "Тут собраны блоги, которые связаны с айтишкой, но не завязаны на обучении. Иными словами - отвлеченный контент",
          items: {
            0: {
              id: 1,
              name: 'Мы Обречены',
              description: 'Максимально живой и открытый подкаст на все животрепещущие темы с айтишниками, но не про айти',
              mainLink: 'https://www.youtube.com/channel/UCUSbYJK87rpBUJ5KGQd7oHA',
            },
            1: {
              id: 2,
              name: 'АйТиБорода',
              description: 'Интервью с различными айти-спецами из различных областей',
              mainLink: 'https://www.youtube.com/c/ITBEARD',
            },
            2: {
              id: 3,
              name: 'Senior Software Vlogger',
              description: 'Просто интересный контент про айтишку и темы, который связаны с ней вскользь',
              mainLink: 'https://www.youtube.com/c/SeniorSoftwareVlogger'
            },
            3: {
              id: 4,
              name: 'Леша Корепанов',
              description: 'Просто приятно послушать о том о сем',
              mainLink: 'https://www.youtube.com/c/aocore'
            },
            4: {
              id: 5,
              name: 'ВОфисе',
              description: 'Подскасты про айти в РФ и мире',
              mainLink: 'https://www.youtube.com/c/%D0%92%D0%BE%D1%84%D0%B8%D1%81%D0%B5'
            },
            5: {
              id: 6,
              name: 'Хекслет',
              description: 'Очень разносторонний контент, подкасты, собеседования, обучение',
              mainLink: 'https://www.youtube.com/c/HexletOrg',
            },
            6: {
              id: 7,
              name: 'Отсобеседование',
              description: 'Публичные собесы, очень хорошо, чтобы закрыть свои пробелы в знаниях и посмотреть, как примерно вообще выглядит собеседование',
              mainLink: 'https://www.youtube.com/c/otsobes'
            }
          },
        },
        {
          title: 'Resources',
          isRow: true,
          items: {
            0: {
              id: 1,
              name: 'Caniuse',
              description: 'Суть в названии - can i use?',
              mainLink: 'https://caniuse.com/'
            },
            1: {
              id: 2,
              name: 'Habr',
              description: 'Статьи, топики, сообщество',
              mainLink: 'https://habr.com/ru/all/'
            },
            2: {
              id: 3,
              name: 'vc.ru',
              description: 'Статьи, топики, сообщество, почти как Хабр',
              mainLink: 'https://vc.ru/'
            },
            3: {
              id: 4,
              name: 'Medium',
              description: 'Много крутых статей по технологиям. Преимущевственно на английском',
              mainLink: 'https://medium.com/'
            },
          },
        },
      ],
    };
  },
};
</script>
