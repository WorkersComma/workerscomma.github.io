export type Test =
  | {
      type: "성별";
      question: string;
      options: [
        {
          label: string;
          value: "남자";
        },
        {
          label: string;
          value: "여자";
        }
      ];
    }
  | {
      type:
        | "물리환경"
        | "직무요구"
        | "직무자율"
        | "관계갈등"
        | "직무불안성"
        | "조직체계"
        | "보상부적절"
        | "일-삶의 균형";
      question: string;
      options: { label: string; value: 1 | 2 | 3 | 4 }[];
    };

export type TestSet = Test[];
