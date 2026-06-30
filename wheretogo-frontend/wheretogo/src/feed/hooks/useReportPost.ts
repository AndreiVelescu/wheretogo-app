import { useMutation } from "@apollo/client/react";
import { REPORT_POST_MUTATION } from "../feed.operations";
import type { ReportPostInput } from "../feed.types";

export const useReportPost = () => {
  const [reportPostMutation] = useMutation(REPORT_POST_MUTATION);

  const reportPost = async (input: ReportPostInput) => {
    try {
      await reportPostMutation({
        variables: { input },
      });
    } catch (error) {
      console.error("Error reporting post:", error);
      throw error;
    }
  };

  return { reportPost };
};
