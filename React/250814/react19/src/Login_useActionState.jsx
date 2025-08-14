import { useActionState } from "react";

export default function Login() {
  const [state, formAction, isPending] = useActionState(
    async (previousState, formData) => {
      const userName = formData.get("userName");
      const password = formData.get("password");
      try {
        if (!userName || !password) {
          return {
            ...previousState,
            message: "아이디와 비밀번호를 모두 입력해주세요.",
            success: false,
          };
        }

        const response = await fetch("http://localhost:3001/login", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ userName, password }),
        });

        const result = await response.json();

        if (response.ok) {
          return {
            ...previousState,
            message: `로그인 성공! ${result.user.userName}님 환영합니다.`,
            success: true,
          };
        } else {
          return {
            ...previousState,
            message: result.message || "로그인에 실패했습니다.",
            success: false,
          };
        }
      } catch (error) {
        return {
          ...previousState,
          message: `서버 연결 실패: ${error.message}`,
          success: false,
        };
      }
    },
    { message: "", success: false }
  );

  return (
    <form action={formAction}>
      <h1>로그인</h1>
      <div>
        <label htmlFor="userName">아이디:</label>
        <input
          type="text"
          id="userName"
          name="userName"
          placeholder="아이디를 입력하세요"
          required
          disabled={isPending}
        />
      </div>
      <div>
        <label htmlFor="password">비밀번호:</label>
        <input
          type="password"
          id="password"
          name="password"
          placeholder="비밀번호를 입력하세요"
          required
          disabled={isPending}
        />
      </div>

      <button type="submit" disabled={isPending}>
        {isPending ? "로그인중..." : "로그인"}
      </button>

      <button type="reset" disabled={isPending}>
        초기화
      </button>
      {state.message && <p>{state.message}</p>}
    </form>
  );
}
