export function SelectionSummary({
  repository,
  scopeType,
  scopeRef
}: {
  repository: string;
  scopeType: string;
  scopeRef: string;
}) {
  return (
    <div style={{ marginTop: 16, padding: 14, borderRadius: 14, background: 'rgba(255,255,255,0.03)', color: '#aeb6c4', lineHeight: 1.7 }}>
      <strong style={{ color: '#f2f4f8' }}>Current analysis target:</strong>
      <div>Repository: {repository}</div>
      <div>Scope type: {scopeType}</div>
      <div>Scope reference: {scopeRef}</div>
    </div>
  );
}
