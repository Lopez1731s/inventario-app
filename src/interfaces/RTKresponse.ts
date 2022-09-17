type Error = {
    status: string;
    error: string;
}

export interface RTKresponse {
    isLoading: boolean;
    isError: boolean;
    error: Error;
}