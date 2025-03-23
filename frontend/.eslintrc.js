/* eslint-disable prettier/prettier */
module.exports = {
  extends: [
    "plugin:vue/vue3-recommended", // Vue3 규칙 활성화
    "prettier", // Prettier 규칙을 ESLint 규칙보다 우선 적용
    "plugin:prettier/recommended", // Prettier와 ESLint 설정을 통합
  ],
  plugins: ["vue"],
  rules: {
    // prettier
    "prettier/prettier": [
      "error",
      {
        printWidth: 80, // 한 줄 최대 문자수
        tabWidth: 4, // 들여쓰기 칸 수
        useTabs: true, // 들여쓰기를 탭으로할지 공백으로할지
        semi: true, // 코드 끝에 세미콜론 사용할지
        singleQuote: true, // 문자열에 큰따옴표 대신 작은따옴표사용할지
        trailingComma: "all", // 객체나 배열에서 마지막 항목 뒤에 쉼표 추가할지
        bracketSpacing: true, // 중괄호 사이에 공백사용할지 { foo: bar }, {foo: bar}
        bracketSameLine: false, // > 닫는태그를 단독으로 둘지
        arrowParens: "always", // 화살표함수 매개변수에 괄호사용할지 (x) => x
        vueIndentScriptAndStyle: true, // vue파일에서 스크립트, 스타일 태그 들여쓰기 할지
      },
    ],

    // eslint
    "no-unused-vars": "error", // 사용되지 않은 변수가 있는 경우 경고
    "no-empty": "error", // 빈 코드 블록 금지
    "no-fallthrough": "error", // switch문에서 case를 명시적으로 break하지않고 넘어가는것 방지
    "no-empty": "error", // 정의되지 않은 변수 사용시 오류
    "no-redeclare": "error", // 동일한 변수명 중복 선언 금지
    "prefer-const": "error", // 변수값 재할당하지 않은 경우 const 사용 강제
    "no-duplicate-imports": "error", // 중복된 import 방지
    "no-var": "error", // var 금지
    "vue/no-unused-vars": "error", // Vue컴포넌트에서 사용되지않은 변수 오류
    "vue/require-default-prop": "error", // props에 default값을 설정하지 않으면 오류
    "vue/valid-v-if": "error", // v-if 유효성 검사
    "vue/multi-word-component-names": "off", // 파일명 multi-word 필수X
    eqeqeq: "error", // 비교연산자 == 금지
  },
};
