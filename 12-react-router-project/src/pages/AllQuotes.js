import { useEffect } from "react";
import QuoteList from "../components/quotes/QuoteList";
import LoadingSpinner from "../components/UI/LoadingSpinner";
import useHttp from "../hooks/use-http";
import { getAllQuotes } from "../lib/api";
import NoQuotesFound from '../components/quotes/NoQuotesFound';

// const DUMMY_QUOTES = [
//   { id: "q1", author: "AJ", text: "Actual text of the quote 1." },
//   { id: "q2", author: "BJ", text: "Actual text of the quote 2." },
//   { id: "q3", author: "CJ", text: "Actual text of the quote 3." },
//   { id: "q4", author: "DJ", text: "Actual text of the quote 4." },
//   { id: "q5", author: "EJ", text: "Actual text of the quote 5." },
// ];

const AllQuotes = () => {
  const {
    sendRequest,
    status,
    data: loadedQuotes,
    error,
  } = useHttp(getAllQuotes, true);
  useEffect(() => {
    sendRequest();
  }, [sendRequest]);

  if (status === "pending") {
    return (
      <div className="Centered">
        <LoadingSpinner></LoadingSpinner>
      </div>
    );
  }

  if(error){
    return <p className="centered focused">{error}</p>
  }

  if(status === 'completed' && (!loadedQuotes || loadedQuotes.length===0)){
    return <NoQuotesFound></NoQuotesFound>
  }

  return <QuoteList quotes={loadedQuotes}></QuoteList>;
};

export default AllQuotes;
