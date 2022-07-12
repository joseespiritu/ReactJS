import { JournalLayout } from '../layout/JournalLayout';
import { NoteView, NothingSelectedView } from '../views';

export const JournalPage = () => {
  return (
    <JournalLayout>
      {/* <Typography>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit eligendi
        quasi recusandae laborum dolorum minus. Deleniti omnis molestias, fugiat
        tempora at maxime dignissimos iusto, doloremque vero cumque nulla ea
        adipisci!
      </Typography> */}

      {/* NothingSelected */}
      {/* <NothingSelectedView /> */}
      {/* NoteView */}
      <NoteView />
    </JournalLayout>
  );
};
