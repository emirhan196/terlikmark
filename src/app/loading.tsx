export default function Loading() {
  return (
    <div className="min-h-screen bg-gradient-to-r from-primary to-secondary flex items-center justify-center">
      <div className="bg-white rounded-lg shadow-2xl p-8 max-w-md w-full mx-4 text-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto mb-4"></div>
        <h1 className="text-2xl font-bold text-gray-800 mb-2">Yükleniyor...</h1>
        <p className="text-gray-600">Lütfen bekleyin</p>
      </div>
    </div>
  );
}