На проекте используется React + Redux ToolKit, TypeScript, React Router, SCSS, Vite

Для запуска проекта используйте команду: yarn dev
Или же: npm run dev (если отсутствует yarn)

1 страница:
Т.к. в дизайне не было кнопки для перехода на страницу с дополнительными вопросами, я реализовал переход при ответе на первый вопрос. При клике на ответ мы сразу же переходим на страницу с дополнительными вопросами
Ответ сохранятеся в localStorage в ключе firstQuestion

2 страница
Требуется ответить на все вопросы, чтобы перейти на страницу с благодарностью.
Все ответы на вопросы сохраняются в localStorage и при перезагрузке страницы уже отмечены выбранными
При ответе на все вопросы и при клике на кнопку "Отправить ответы" реализуется переход на страницу с благодарностью и выводится в консоль структура, которая хранит в себе ответы на все вопросы в том виде, в котором требуется в задании.
